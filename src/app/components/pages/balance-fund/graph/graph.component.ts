import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  AfterViewInit,
  SimpleChanges
} from "@angular/core";
import { isPlatformBrowser} from '@angular/common';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
declare var $: JQueryStatic;

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
export class GraphComponent implements OnInit, OnDestroy, OnChanges {
  @Input() dataSet;
  @Input() apiData;
  graphData = [];
  innerdata = [];
  // data = [];
  newData;
  isMobile;
  dataObj = {
    month: null as string,
    value: null as number,
    value1: null as number
  };

  public options: any;
  private chart2: AmChart;
  private timer: any;

  constructor(private AmCharts: AmChartsService) {}
  makeDataSet() {
    const data = [];
    for (var i = 0; i < this.dataSet.dates.length; i++) {
      data.push({
        month: new Date(this.dataSet.dates[i]),
        value1: +this.dataSet.benchMark[i],
        value: +this.dataSet.fundReturn[i]
      });
    }
    data.sort(function(_a, _b) {
      const a: any = _a.month;
      const b: any = _b.month;
      const aYear: any = a.getFullYear();
      const bYear: any = b.getFullYear();
      return b - a && aYear - bYear;
    });
    return data;
  }

  makeOptions(dataProvider) {
    let vTitle = 'R1,000 initial investment'
    let vLabel = 'R'
    if(this.apiData.slug === "global-equity-fund" || this.apiData.slug === "islamic-global-equity-fund") {
      vTitle = '$10 000 initial investment';
      vLabel = '$';
    }
    let isMobile = this.isMobile
    function getMonthNameByNum(pNum) {
      switch (pNum) {
        case 0:
          return "Jan";
          break;
        case 1:
          return "Feb";
          break;
        case 2:
          return "Mar";
          break;
        case 3:
          return "Apr";
          break;
        case 4:
          return "May";
          break;
        case 5:
          return "Jun";
          break;
        case 6:
          return "Jul";
          break;
        case 7:
          return "Aug";
          break;
        case 8:
          return "Sep";
          break;
        case 9:
          return "Oct";
          break;
        case 10:
          return "Nov";
          break;
        case 11:
          return "Dec";
          break;
        default:
          return "";
          break;
      }
    }
    return {
      type: "serial",
      theme: "light",
      color:"gray",
      marginTop: 25,
      marginRight: 25,
      dataProvider: dataProvider,
      valueAxes: [
        {
          vLabel,
          title: vTitle,
          titleBold: false,
          titleFontSize: window.innerWidth < 480 ? 11 : 13,
          id: "v1",
          position: "left",
          axisThickness:1,
          axisColor:"grey",
          axisAlpha:1,
          gridAlpha:2,
          gridColor:"white",
          gridThickness:1,
          labelFunction: function(value, valueText) {
            return `${vLabel}${valueText}`
          }
        }
      ],

      graphs: [
        {
          id: "g1",
          balloonColor:"gray",
          balloonText:
            "<div style='font-size:14px; background-color:#fff;text-align:left'><span style='color:rgb(182,12,47); '>FUND RETURN [[value]]</span></div>",
          borderThickness:0,
          borderAlpha:0.1,
          lineColor: "rgb(182,12,47)",
          lineThickness: 1,
          useLineColorForBulletBorder: false,
          valueField: "value",
          bulletSize:13,
          showOnInit: false,
          startDuration: 0
        },
        {
          id: "g2",
          // bullet: "round",
          balloonColor:"gray",
          balloonText:
            "<div style='font-size:14px; background-color:#fff;text-align:left;padding-right:2px'><span style='color:rgb(106,157,154);'>BENCHMARK [[value1]]&nbsp;&nbsp;</span></div>",
          // bulletBorderAlpha: 1,
            // bulletBorderThickness:0,
          // bulletColor: "#a11c0d",
          lineColor: "rgb(106,157,154)",
          hideBulletsCount: 50,
          lineThickness: 1,
          valueField: "value1",
          showOnInit: false,
          startDuration: 0,
          pointRadius: 0
        },

      ],
        balloon:{
          adjustBorderColor:true,
          fillAlpha:1,
          borderAlpha:1,
          borderThickness:1,
          showBullet:true,
          drop:false,
          fillColor:"white",
          borderColor:"gray",
          shadowAlpha:0,
          fontSize:13,
          animationDuration: 0,
          startDuration: 0

        },

     chartCursor: {
        color:"white",
        cursorAlpha: 1,
        cursorColor:"rgb(163,11,42)",
        valueLineAlpha: 2,
        animationDuration: 0,
        startDuration: 0,
        zoomable: isMobile ? false : true
        // pan: false
      },
      categoryField: "month",
      categoryAxis: {
        gridAlpha:0,
        axisThickness:1,
        axisColor:"grey",
        axisAlpha:1,
        dashLength:4,
        parseDates: false,
        categoryFunction: function(category, dataItem, categoryAxis) {
          const m = getMonthNameByNum(dataItem.month.getMonth());
          return (
            "" +
            m +
            " " +
            dataItem.month.getDate() +
            ", " +
            dataItem.month.getFullYear()
          );
        },
        labelFunction: function(valueText, serialDataItem, categoryAxis) {
          return (
            "" + parseInt(serialDataItem.dataContext.month.getFullYear(), 10)
          );
        },
        showFirstLabel: false,
        startOnAxis: false,
        equalSpacing: true,
        autoGridCount: false,
        gridCount: 4
      },
      /*
	  categoryAxesSettings: {
		minPeriod: "yyyy",
		autoGridCount: false,
		equalSpacing: true,
		gridCount: 1000,
		labelRotation: 90, //recommended if you have a lot of labels
		axisHeight: 50  //recommended to avoid overlap with the scrollbar
	  },*/
      export: {
        enabled: true
      }
    };
  }
  ngOnInit() {
    let isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }
    this.isMobile = isMobile
    // Create chartdiv1
    if (this.makeDataSet()) {
      this.options = this.makeOptions(this.makeDataSet());

      // Create chartdiv2
      this.chart2 = this.AmCharts.makeChart(
        "chartdiv2",
        this.makeOptions(this.makeDataSet())
        );
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    this.newData = this.makeDataSet();
    if (this.newData) {
      this.options = this.makeOptions(this.makeDataSet());

      // Create chartdiv2
      this.chart2 = this.AmCharts.makeChart(
        "chartdiv2",
        this.makeOptions(this.makeDataSet())
      );
    }
  }
  ngOnDestroy() {
    if (this.chart2) {
      this.AmCharts.destroyChart(this.chart2);
    }
  }
}
