import SearchItem from './search-item.model';

export default interface SearchResponse {
    kind: string;
    etag: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number
    };
    items: SearchItem[];
}
