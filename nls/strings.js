define({
  root: ({
    _widgetLabel: "Add Web Data",

    search: {
      featureLayerTitlePattern: "{serviceName} - {layerName}",
      layerInaccessible: "The layer is inaccessible.",
      online: "ArcGIS Online",
      url: "Enter A URL",
      loadError: "AddWebData, unable to load:",
      searchBox: {
        search: "Search",
        placeholder: "Search..."
      },
      bboxOption: {
        bbox: "Within map area"
      },
      scopeOptions: {
        anonymousContent: "Content",
        myContent: "My Content",
        ArcGISGroup1: "ArcGIS Group 1",
        ArcGISGroup2: "ArcGIS Group 2",
        ArcGISGroup3: "ArcGIS Group 3",
        ArcGISGroup4: "ArcGIS Group 4",
        ArcGISGroup5: "ArcGIS Group 5",
        ArcGISGroup6: "ArcGIS Group 6",
        myOrganization: "My Organization",
        curated: "Curated",
        ArcGISOnline: "ArcGIS Online"
      },
      sortOptions: {
        prompt: "Sort By:",
        relevance: "Relevance",
        title: "Title",
        owner: "Owner",
        rating: "Rating",
        views: "Views",
        date: "Date",
        switchOrder: "Switch"
      },
      typeOptions: {
        prompt: "Type",
        mapService: "Map Service",
        featureService: "Feature Service",
        imageService: "Image Service",
        vectorTileService: "Vector Tile Service",
        kml: "KML",
        wms: "WMS"
      },
      resultsPane: {
        noMatch: "No results were found."
      },
      paging: {
        first: "<<",
        firstTip: "First",
        previous: "<",
        previousTip: "Previous",
        next: ">",
        nextTip: "Next",
        pagePattern: "{page}"
      },
      resultCount: {
        countPattern: "{count} {type}",
        itemSingular: "Item",
        itemPlural: "Items"
      },

      item: {
        actions: {
          add: "Add",
          close: "Close",
          remove: "Remove",
          details: "Details",
          done: "Done",
          editName: "Edit Name"
        },
        messages: {
          adding: "Adding...",
          removing: "Removing...",
          added: "Added",
          addFailed: "Add failed",
          unsupported: "Unsupported"
        },
        typeByOwnerPattern: "{type} by {owner}",
        dateFormat: "MMMM d, yyyy",
        datePattern: "{date}",
        ratingsCommentsViewsPattern: "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        ratingsCommentsViewsLabels: {"ratings": "ratings", "comments": "comments", "views": "views"},
        types: {
          "Map Service": "Map Service",
          "Feature Service": "Feature Service",
          "Image Service": "Image Service",
          "Vector Tile Service": "Vector Tile Service",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },

    addFromUrl: {
      donw: "Done",
      editName: "edit Name",
      buttonLabel: "URL...",
      caption: "Add Data - Enter a URL",
      type: "Type",
      url: "URL",
      types: {
        "ArcGIS": "An ArcGIS Server Web Service",
        "WMS": "A WMS OGC Web Service",
        "WMTS": "A WMTS OGC Web Service",
        "WFS": "A WFS OGC Web Service",
        "KML": "A KML File",
        "GeoRSS": "A GeoRSS File",
        "CSV": "A CSV File"
      },
      samplesHint: "Sample URL(s)"
    }
  })
});
