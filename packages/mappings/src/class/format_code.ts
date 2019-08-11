export class heremaps_formatter {
    /**
     * _format   for geo code HereMaps._results
     */
    public async _format(heremapresults: any) {
        const sol: HereMaps._results = JSON.parse(heremapresults);
        return sol.Response.View[0].Result[0].Location.DisplayPosition;
    }

    /**
     * _format   for reverse geo code
     */
    public async format_() {}
}
