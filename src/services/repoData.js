import sampleRepoData from "../data/sampleRepoData";
import sampleCommitData from "../data/sampleCommitData";

export function getRepositoryDetails() {
    return new Promise(resolve => {
        resolve(sampleRepoData)
    })
}

export function getRepositoryCommitDetails() {
    return new Promise(resolve => {
        resolve(sampleCommitData)
    })
}