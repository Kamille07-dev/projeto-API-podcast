import fs from "fs"
import path from "path"
import { PodcastModel } from "../models/podcast-transfer-model";




const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    
    const language = "utf-8"
    const rawData = fs.readFileSync(pathData, language)
    let jsonfile = JSON.parse(rawData);


    if(podcastName){
        jsonfile = jsonfile.filter((podcast:PodcastModel) => podcast.podcastName===podcastName);
    }

    return jsonfile;
}