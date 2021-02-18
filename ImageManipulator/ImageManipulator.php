<?php
// Image Manipulator
//  A PHP class that manipulates images.

namespace Image;


class SimpleImage {

  const
    ERR_FILE_NOT_FOUND = 1,
    ERR_INVALID_IMAGE = 2,
    ERR_UNSUPPORTED_FORMAT = 3,
    ERR_GD_NOT_ENABLED = 4,
    ERR_WRITE = 5;

    protected $image;
    protected $exif;
    protected $mimeType;
       
    // Creates a new SimpleImage object.
    // @param string $image An image file to load.
    // @throws \Exception Thrown if the GD library is not found; image data is invalid.
    public function __construct($image = null) {
    // Check for the required GD extension
    if(extension_loaded('gd')) {
      // Ignore JPEG warnings that cause imagecreatefromjpeg() to fail
      ini_set('gd.jpeg_ignore_warning', 1);
    } else {
      throw new \Exception('Required extension GD is not loaded.', self::ERR_GD_NOT_ENABLED);
    }

    // Load an image through the constructor
    if($image) {
      $this->fromFile($image);
    }
  }  
    //Destroys the image resource.
   public function __destruct() {
    if($this->image !== null && is_resource($this->image) && get_resource_type($this->image) === 'gd') {
      imagedestroy($this->image);
    }
  }
        
   //Loads an image from a file.  
   public function fromFile($file) {
      
    // Check if the file exists and is readable. We're using fopen() instead of file_exists()
    $handle = @fopen($file, 'r');
    if($handle === false) {
      throw new \Exception("File not found: $file", self::ERR_FILE_NOT_FOUND);
    }
    fclose($handle);

    // Get image info
    $info = getimagesize($file);
    if($info === false) {
      throw new \Exception("Invalid image file: $file", self::ERR_INVALID_IMAGE);
    }
    $this->mimeType = $info['mime'];

    // Create image object from file
    switch($this->mimeType) {
    case 'image/jpeg':
      $this->image = imagecreatefromjpeg($file);
      break;
    case 'image/png':
      $this->image = imagecreatefrompng($file);
      break;
    }
    if(!$this->image) {
      throw new \Exception("Unsupported format: " . $this->mimeType, self::ERR_UNSUPPORTED_FORMAT);
    }

    // Convert pallete images to true color images
    imagepalettetotruecolor($this->image);

    // Load exif data from JPEG images
    if($this->mimeType === 'image/jpeg' && function_exists('exif_read_data')) {
      $this->exif = @exif_read_data($file);
    }

    return $this;
  }
    
   //Proportionally resize the image to fit inside a specific width and height.
   public function bestFit($maxWidth, $maxHeight) {
    // If the image already fits, there's nothing to do
    if($this->getWidth() <= $maxWidth && $this->getHeight() <= $maxHeight) {
      return $this;
    }
      
    // Calculate max width or height based on orientation
    if($this->getOrientation() === 'portrait') {
      $height = $maxHeight;
      $width = $maxHeight * $this->getAspectRatio();
    } else {
      $width = $maxWidth;
      $height = $maxWidth / $this->getAspectRatio();
    }

    // Reduce to max width
    if($width > $maxWidth) {
      $width = $maxWidth;
      $height = $width / $this->getAspectRatio();
    }

    // Reduce to max height
    if($height > $maxHeight) {
      $height = $maxHeight;
      $width = $height * $this->getAspectRatio();
    }

    return $this->resize($width, $height);
  }
 
    //Crop the image.
  public function crop($x1, $y1, $x2, $y2) {
    // Keep crop within image dimensions
    $x1 = self::keepWithin($x1, 0, $this->getWidth());
    $x2 = self::keepWithin($x2, 0, $this->getWidth());
    $y1 = self::keepWithin($y1, 0, $this->getHeight());
    $y2 = self::keepWithin($y2, 0, $this->getHeight());

    // Crop it
    $this->image = imagecrop($this->image, [
      'x' => min($x1, $x2),
      'y' => min($y1, $y2),
      'width' => abs($x2 - $x1),
      'height' => abs($y2 - $y1)
    ]);

    return $this;
  }

//Writes and save the image to a file.
  public function toFile($file, $mimeType = null, $quality = 100) {
    $image = $this->generate($mimeType, $quality);

    // Save the image to file
    if(!file_put_contents($file, $image['data'])) {
      throw new \Exception("Failed to write image to file: $file", self::ERR_WRITE);
    }

    return $this;
  }

//Outputs the image to the screen. Must be called before any output is sent to the screen.
  public function toScreen($mimeType = null, $quality = 100) {
    $image = $this->generate($mimeType, $quality);

    // Output the image to stdout
    header('Content-Type: ' . $image['mimeType']);
    echo $image['data'];

    return $this;
  }
}
   ?> 