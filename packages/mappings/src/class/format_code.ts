export class heremaps_formatter {
    /**
     * _format   for geo code
     */
    public async _format(heremapresults: HereMaps._results) {
        console.log(heremapresults, "GEO | CO-ORDINATES");
        return heremapresults.Response.View[0].Result[0].Location
            .DisplayPosition;
    }

    /**
     * _format   for reverse geo code
     */
    public async format_() {}
}
