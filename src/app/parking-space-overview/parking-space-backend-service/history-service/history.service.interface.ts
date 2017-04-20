import { Observable } from 'rxjs/Observable';

import { HistoryCollection } from '../../models/history-collection.model';

export interface GetHistory {
    getHistory(parkingSpaceName: string): Observable<HistoryCollection>;
}
