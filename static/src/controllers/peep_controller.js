import { Controller } from "stimulus";
import axios from "axios";

export default class extends Controller {
    static get targets() {
        return ["toots", "url"];
    }

    connect() {
        this.load();

        if (this.data.has("refreshInterval")) {
            this.startRefreshing()
        }
    }

    load() {

        const url = `https://${this.urlTarget.value}/api/v1/streaming/public/local`

        axios.get(this.data.get("url")).then((res) => {
            console.log(res);
            this.talksTarget.innerHTML = res.data;
        }, (error) => {
            console.log(error);
        })
    }

    submit() {
        axios.post(this.data.get("url"), `${this.contentTarget.value}`).then((res) => {
            this.contentTarget.value = "";
            console.log(res);
        }, (error) => {
            console.log(error);
        })
    }

    startRefreshing() {
        this.refreshTimer = setInterval(() => {
          this.load()
        }, this.data.get("refreshInterval"))
    }

    stopRefreshing() {
        if (this.refreshTimer) {
          clearInterval(this.refreshTimer)
        }
    }
}