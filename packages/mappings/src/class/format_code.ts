export class heremaps_formatter {
    /**
     * _format   for geo code HereMaps._results
     */
    public async _format(heremapresults: any, avergae: boolean = false) {
        const sol: HereMaps._results = JSON.parse(heremapresults);
        let DisplayPositionAverage = [];

        if (sol.Response.View.length > 1) {
            const Result = sol.Response.View[0].Result;
            if (!avergae)
                return [
                    {
                        co_ordinates: Result[0].Location.DisplayPosition,
                        address: Result[0].Location.Address
                    }
                ];

            Result.forEach(resObj => {
                DisplayPositionAverage.push({
                    co_ordinates: resObj.Location.DisplayPosition,
                    address: resObj.Location.Address
                });
            });

            return DisplayPositionAverage;
        }

        return [
            {
                path: "View",
                message: "Co-ordinates are non existent"
            }
        ];
    }

    /**
     * _format   for reverse geo code
     */
    public async format_() {}
}
