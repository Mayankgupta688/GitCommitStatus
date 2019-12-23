import axios from "axios";

export function getRepositoryDetails() {
    return axios.get("https://api.github.com/repos/angular/angular")
}

export function getRepositoryCommitDetails() {
    return axios.get("https://api.github.com/repos/angular/angular/commits")
}