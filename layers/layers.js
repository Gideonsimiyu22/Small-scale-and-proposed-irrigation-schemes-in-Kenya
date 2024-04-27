var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ken_admbnda_adm1_iebc_20191031_1 = new ol.format.GeoJSON();
var features_ken_admbnda_adm1_iebc_20191031_1 = format_ken_admbnda_adm1_iebc_20191031_1.readFeatures(json_ken_admbnda_adm1_iebc_20191031_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ken_admbnda_adm1_iebc_20191031_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_admbnda_adm1_iebc_20191031_1.addFeatures(features_ken_admbnda_adm1_iebc_20191031_1);
var lyr_ken_admbnda_adm1_iebc_20191031_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ken_admbnda_adm1_iebc_20191031_1, 
                style: style_ken_admbnda_adm1_iebc_20191031_1,
                popuplayertitle: "ken_admbnda_adm1_iebc_20191031",
                interactive: true,
                title: '<img src="styles/legend/ken_admbnda_adm1_iebc_20191031_1.png" /> ken_admbnda_adm1_iebc_20191031'
            });
var format_ke_proposedirrigation_2 = new ol.format.GeoJSON();
var features_ke_proposedirrigation_2 = format_ke_proposedirrigation_2.readFeatures(json_ke_proposedirrigation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ke_proposedirrigation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ke_proposedirrigation_2.addFeatures(features_ke_proposedirrigation_2);
var lyr_ke_proposedirrigation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ke_proposedirrigation_2, 
                style: style_ke_proposedirrigation_2,
                popuplayertitle: "ke_proposed-irrigation",
                interactive: true,
                title: '<img src="styles/legend/ke_proposedirrigation_2.png" /> ke_proposed-irrigation'
            });
var format_ke_smallscale_irrigation_3 = new ol.format.GeoJSON();
var features_ke_smallscale_irrigation_3 = format_ke_smallscale_irrigation_3.readFeatures(json_ke_smallscale_irrigation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ke_smallscale_irrigation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ke_smallscale_irrigation_3.addFeatures(features_ke_smallscale_irrigation_3);
var lyr_ke_smallscale_irrigation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ke_smallscale_irrigation_3, 
                style: style_ke_smallscale_irrigation_3,
                popuplayertitle: "ke_small-scale_irrigation",
                interactive: true,
                title: '<img src="styles/legend/ke_smallscale_irrigation_3.png" /> ke_small-scale_irrigation'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ken_admbnda_adm1_iebc_20191031_1.setVisible(true);lyr_ke_proposedirrigation_2.setVisible(true);lyr_ke_smallscale_irrigation_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ken_admbnda_adm1_iebc_20191031_1,lyr_ke_proposedirrigation_2,lyr_ke_smallscale_irrigation_3];
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_ke_proposedirrigation_2.set('fieldAliases', {'NAME_SCHEM': 'NAME_SCHEM', });
lyr_ke_smallscale_irrigation_3.set('fieldAliases', {'PROVINCE': 'PROVINCE', 'DISTRICT': 'DISTRICT', 'DIVISION': 'DIVISION', 'SCHEME_NAM': 'SCHEME_NAM', });
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_ke_proposedirrigation_2.set('fieldImages', {'NAME_SCHEM': 'TextEdit', });
lyr_ke_smallscale_irrigation_3.set('fieldImages', {'PROVINCE': 'TextEdit', 'DISTRICT': 'TextEdit', 'DIVISION': 'TextEdit', 'SCHEME_NAM': 'TextEdit', });
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'inline label - always visible', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_ke_proposedirrigation_2.set('fieldLabels', {'NAME_SCHEM': 'inline label - always visible', });
lyr_ke_smallscale_irrigation_3.set('fieldLabels', {'PROVINCE': 'no label', 'DISTRICT': 'no label', 'DIVISION': 'no label', 'SCHEME_NAM': 'inline label - always visible', });
lyr_ke_smallscale_irrigation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});