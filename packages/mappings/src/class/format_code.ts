export class heremaps_formatter {
    /**
     * _format   for geo code HereMaps._results
     */
    public async _format(heremapresults: any, avergae: boolean = false) {
        const sol: HereMaps._results = JSON.parse(heremapresults);
        let DisplayPositionAverage = [];

        const Result = sol.Response.View[0].Result;
        if (!avergae) return Result[0].Location.DisplayPosition;

        Result.forEach(resObj => {
            DisplayPositionAverage.push(resObj.Location.DisplayPosition);
        });

        return DisplayPositionAverage;
    }

    /**
     * _format   for reverse geo code
     */
    public async format_() {}
}
