import { GIF } from "./GIF";
import { MetaProperties } from "./MetaProperties";

export interface GiphyResponse {
    data: GIF[];
    pagination: any;
    meta: MetaProperties;
}