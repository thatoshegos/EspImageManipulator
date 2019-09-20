import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WPAPIService {
  endpoints = "https://dev.omangom.com/kagiso/wordpress/wp-json/wp/v2";
  menuEndPoints = "https://dev.omangom.com/kagiso/wordpress/wp-json/menus/v1";
  pagesEndPoint = "https://dev.omangom.com/kagiso/wordpress/wp-json/acf/v3";
  postEndpoint = "https://dev.omangom.com/kagiso/wordpress/wp-json/wp/v2";
  csvDataEndPoint =
    "http://dev.omangom.com/kagiso/wordpress/?custom_action=get_chart_data&csv_url=";
  emailSendUrl =
    "http://dev.omangom.com/kagiso/wordpress/?custom_action=save_contact";
  postByslug = "http://dev.omangom.com/kagiso/wordpress/wp-json/wp/v2/posts";
  constructor(private http: HttpClient) {}
  getCategory(query) {
    return this.http.get(`${this.endpoints}/categories/${query}`);
  }
  getSubcategory(query) {
    return this.http.get(`${this.endpoints}/categories/${query}`);
  }
  getPostFromCategory(query) {
    return this.http.get(`${this.postEndpoint}/posts/${query}`);
  }
  getQuaterlyImagePostFromCategory(query) {
    return this.http.get(`${this.postEndpoint}/posts/${query}`);
  }
  getPost(id) {
    return this.http.get(`${this.pagesEndPoint}/posts/${id}`);
  }
  getPostBySlug(slug) {
    return this.http.get(`${this.postByslug}?slug=${slug}`);
  }
  pages(query) {
    return this.http.get(`${this.endpoints}/pages/${query}`);
  }
  getFirstMenu() {
    return this.http.get(`${this.menuEndPoints}/menus/header-menu-first`);
  }
  getSecondMenu() {
    return this.http.get(`${this.menuEndPoints}/menus/header-menu-second`);
  }
  getPages(id) {
    // const headers = new HttpHeaders().set(
    //   "Content-Type",
    //   "text/plain; charset=utf-8"
    // );
    return this.http.get(`${this.pagesEndPoint}/posts/${id}`);
  }
  getCSVData(url) {
    return this.http.get(url, { responseType: "text" });
  }
  readCSVDataFromServer(csvUrl) {
    const apiUrl = `
  ${this.csvDataEndPoint}${csvUrl}?rand=${new Date().getTime()}`;
    return this.http.get(apiUrl, { responseType: "text" });
  }
  saveContact(contact) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      })
    };

    return this.http.get(
      `${this.emailSendUrl}&rand=${new Date().getTime()}&name=${
        contact.name
      }&email=${contact.email}&mobile=${contact.mobile}&intrest=${
        contact.intrest
      }&comment=${contact.comment}`
    );
  }
}
