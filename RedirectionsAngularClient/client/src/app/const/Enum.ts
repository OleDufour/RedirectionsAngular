export class Enum {

    _idsValues: { id: number; name: string }[] = [];


    constructor() {
        //    this._idsValues = idsValues;

    }

    SortByNameAndConvertToArray(_en: any, sort: boolean, exclude: number[]=[]): { id: number; name: string }[] {

        // if (exclude == null)
        //     exclude = [];

        console.log("SortByNameAndConvertToArray, _en", _en);
        console.log("SortByNameAndConvertToArray, _idsValues", this._idsValues);

        for (var n in _en) {
            if (typeof _en[n] === 'number' && exclude.indexOf(_en[n]) < 0)
                this._idsValues.push({ id: <number>_en[n], name: n });
        }

        console.log("SortByNameAndConvertToArray, _idsValues", this._idsValues);


        if (sort)

            this._idsValues = this._idsValues.sort((t1, t2) => {
                if (t1.name > t2.name) { return 1; }
                if (t1.name < t2.name) { return -1; }
                return 0;
            });

        console.log("SortByNameAndConvertToArray, sorted", this._idsValues);
        return this._idsValues;
    }




}