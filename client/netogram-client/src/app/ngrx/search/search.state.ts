import { HttpErrorResponseModel } from '../../models/http-error-response.model';
import { CommonSearchResultModel } from '../../models/search.model';

export interface SearchState {
  searchResult: CommonSearchResultModel;

  searchResultLoading: boolean;
  searchResultFailure: HttpErrorResponseModel;
}
