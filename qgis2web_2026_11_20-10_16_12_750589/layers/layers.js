var wms_layers = [];


        var lyr_GoogleSatlite_0 = new ol.layer.Tile({
            'title': 'Google Satélite',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_SICPMOT_Ord50892022_1 = new ol.format.GeoJSON();
var features_SICPMOT_Ord50892022_1 = format_SICPMOT_Ord50892022_1.readFeatures(json_SICPMOT_Ord50892022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SICPMOT_Ord50892022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SICPMOT_Ord50892022_1.addFeatures(features_SICPMOT_Ord50892022_1);
var lyr_SICPMOT_Ord50892022_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SICPMOT_Ord50892022_1, 
                style: style_SICPMOT_Ord50892022_1,
                popuplayertitle: 'SIC-PMOT _Ord5089-2022',
                interactive: true,
    title: 'SIC-PMOT _Ord5089-2022<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_0.png" /> NO URBANIZABLE<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_1.png" /> URBANIZABLE<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_2.png" /> URBANIZADO Andrade<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_3.png" /> URBANIZADO Ciudad<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_4.png" /> URBANIZADO El Mirador<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_5.png" /> URBANIZADO La Central<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_6.png" /> URBANIZADO La Libertad<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_7.png" /> URBANIZADO La Reducción<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_8.png" /> URBANIZADO Los Arboles<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_9.png" /> URBANIZADO Los Campamentos<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_10.png" /> URBANIZADO Medrano<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_11.png" /> URBANIZADO Mundo Nuevo<br />\
    <img src="styles/legend/SICPMOT_Ord50892022_1_12.png" /> URBANIZADO SantaMaríadeOro<br />' });
var format_SICT_Uso_Suelo_Ord46002011_2 = new ol.format.GeoJSON();
var features_SICT_Uso_Suelo_Ord46002011_2 = format_SICT_Uso_Suelo_Ord46002011_2.readFeatures(json_SICT_Uso_Suelo_Ord46002011_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SICT_Uso_Suelo_Ord46002011_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SICT_Uso_Suelo_Ord46002011_2.addFeatures(features_SICT_Uso_Suelo_Ord46002011_2);
var lyr_SICT_Uso_Suelo_Ord46002011_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SICT_Uso_Suelo_Ord46002011_2, 
                style: style_SICT_Uso_Suelo_Ord46002011_2,
                popuplayertitle: 'SIC-T_Uso_Suelo_Ord4600-2011',
                interactive: true,
    title: 'SIC-T_Uso_Suelo_Ord4600-2011<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_0.png" /> AGRÍCOLA<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_1.png" /> AGRICOLA Y AGROINDUSTRIAL<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_2.png" /> AGRÍCOLA Y AGROINDUSTRIAL<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_3.png" /> AGRÍCOLA Y AGROTURISMO<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_4.png" /> BASURAL MUNICIPAL<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_5.png" /> COMERCIAL<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_6.png" /> COMERCIAL MAYORISTA<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_7.png" /> CONSECIÓN PETROLERA<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_8.png" /> CONSERVACIÓN DE RIBERA<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_9.png" /> DESARROLLO Y ECOTURISMO<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_10.png" /> ESPARCIMIENTO<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_11.png" /> ESTUDIAR<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_12.png" /> FRANJA FORESTAL<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_13.png" /> INDUSTRIAL<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_14.png" /> INDUSTRIAL CON FORESTACIÓN<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_15.png" /> INDUSTRIAL SUB ZONA A<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_16.png" /> INDUSTRIAL SUB ZONA B<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_17.png" /> RECREACIÓN Y CULTURAL<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_18.png" /> RECREACIÓN Y TURISMO<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_19.png" /> RESERVA CAMPUS UNIVERSITARIO<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_20.png" /> RESERVA DE CEMENTERIO<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_21.png" /> RESERVA HUAYQUERIAS<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_22.png" /> RESIDENCIAL ESPECIAL<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_23.png" /> RESIDENCIAL MIXTO<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_24.png" /> RESIDENCIAL RURAL<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_25.png" /> RESIDENCIAL URBANO<br />\
    <img src="styles/legend/SICT_Uso_Suelo_Ord46002011_2_26.png" /> TERMINAL DE TRANSPORTE<br />' });
var format_CuentasMunipales2026_3 = new ol.format.GeoJSON();
var features_CuentasMunipales2026_3 = format_CuentasMunipales2026_3.readFeatures(json_CuentasMunipales2026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuentasMunipales2026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuentasMunipales2026_3.addFeatures(features_CuentasMunipales2026_3);
var lyr_CuentasMunipales2026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuentasMunipales2026_3, 
                style: style_CuentasMunipales2026_3,
                popuplayertitle: 'Cuentas Munipales 2026',
                interactive: true,
                title: '<img src="styles/legend/CuentasMunipales2026_3.png" /> Cuentas Munipales 2026'
            });
var format_Capas_SICT_Rivadavia_redvialsict_4 = new ol.format.GeoJSON();
var features_Capas_SICT_Rivadavia_redvialsict_4 = format_Capas_SICT_Rivadavia_redvialsict_4.readFeatures(json_Capas_SICT_Rivadavia_redvialsict_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capas_SICT_Rivadavia_redvialsict_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capas_SICT_Rivadavia_redvialsict_4.addFeatures(features_Capas_SICT_Rivadavia_redvialsict_4);
var lyr_Capas_SICT_Rivadavia_redvialsict_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Capas_SICT_Rivadavia_redvialsict_4, 
                style: style_Capas_SICT_Rivadavia_redvialsict_4,
                popuplayertitle: 'Capas_SICT_Rivadavia_red vial sict',
                interactive: false,
                title: '<img src="styles/legend/Capas_SICT_Rivadavia_redvialsict_4.png" /> Capas_SICT_Rivadavia_red vial sict'
            });

lyr_GoogleSatlite_0.setVisible(true);lyr_SICPMOT_Ord50892022_1.setVisible(false);lyr_SICT_Uso_Suelo_Ord46002011_2.setVisible(false);lyr_CuentasMunipales2026_3.setVisible(false);lyr_Capas_SICT_Rivadavia_redvialsict_4.setVisible(true);
var layersList = [lyr_GoogleSatlite_0,lyr_SICPMOT_Ord50892022_1,lyr_SICT_Uso_Suelo_Ord46002011_2,lyr_CuentasMunipales2026_3,lyr_Capas_SICT_Rivadavia_redvialsict_4];
lyr_SICPMOT_Ord50892022_1.set('fieldAliases', {'FUENTE': 'FUENTE', 'SUBAREA': 'SUBAREA', 'NOMBRE': 'NOMBRE', });
lyr_SICT_Uso_Suelo_Ord46002011_2.set('fieldAliases', {'ID': 'ID', 'DENOMINACI': 'DENOMINACI', 'FUENTE': 'FUENTE', });
lyr_CuentasMunipales2026_3.set('fieldAliases', {'NC': 'NC', 'Cuenta': 'Cuenta', 'Titular': 'Titular', 'Padrón': 'Padrón', 'Ubicación': 'Ubicación', });
lyr_Capas_SICT_Rivadavia_redvialsict_4.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'estadocall': 'estadocall', 'length-met': 'length-met', 'Deta-Calle': 'Deta-Calle', });
lyr_SICPMOT_Ord50892022_1.set('fieldImages', {'FUENTE': 'TextEdit', 'SUBAREA': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_SICT_Uso_Suelo_Ord46002011_2.set('fieldImages', {'ID': 'TextEdit', 'DENOMINACI': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_CuentasMunipales2026_3.set('fieldImages', {'NC': 'TextEdit', 'Cuenta': 'TextEdit', 'Titular': 'TextEdit', 'Padrón': 'TextEdit', 'Ubicación': 'TextEdit', });
lyr_Capas_SICT_Rivadavia_redvialsict_4.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'estadocall': 'TextEdit', 'length-met': 'TextEdit', 'Deta-Calle': 'TextEdit', });
lyr_SICPMOT_Ord50892022_1.set('fieldLabels', {'FUENTE': 'inline label - always visible', 'SUBAREA': 'inline label - always visible', 'NOMBRE': 'inline label - always visible', });
lyr_SICT_Uso_Suelo_Ord46002011_2.set('fieldLabels', {'ID': 'hidden field', 'DENOMINACI': 'inline label - always visible', 'FUENTE': 'inline label - always visible', });
lyr_CuentasMunipales2026_3.set('fieldLabels', {'NC': 'hidden field', 'Cuenta': 'inline label - visible with data', 'Titular': 'inline label - visible with data', 'Padrón': 'inline label - visible with data', 'Ubicación': 'inline label - visible with data', });
lyr_Capas_SICT_Rivadavia_redvialsict_4.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'estadocall': 'no label', 'length-met': 'no label', 'Deta-Calle': 'no label', });
lyr_Capas_SICT_Rivadavia_redvialsict_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});