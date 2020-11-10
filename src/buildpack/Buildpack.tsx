export interface Buildpack {
    name: string;
    ns: string;
    version: string;
    addr: string;
    yanked: boolean;
}