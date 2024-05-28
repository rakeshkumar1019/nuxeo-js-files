Polymer({
      is: 'nuxeo-default-search-form',
      behaviors: [Nuxeo.LayoutBehavior, Nuxeo.I18nBehavior],
      properties: {
        params: {
          type: Object,
          value: {},
          notify: true,
        },
        agg...0     params == null ||
          Object.keys(params).length === 0 ||
          (params && params.ecm_collections.some((item) => item.displayLabel || item.title || item.text))
        );
      },
    });
//# sourceURL=http://localhost:8080/nuxeo/ui//search/default/nuxeo-default-search-form.html.js
