sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ns/incidentes/test/integration/pages/IncidentsList.gen",
	"ns/incidentes/test/integration/pages/IncidentsObjectPage.gen"
], function (JourneyRunner, IncidentsListGenerated, IncidentsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ns/incidentes') + '/test/flp.html#app-preview',
        pages: {
			onTheIncidentsListGenerated: IncidentsListGenerated,
			onTheIncidentsObjectPageGenerated: IncidentsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

