const RACKS = [
  ["01", "IA DEPO"], ["02", "IA SALA"], ["04", "IA FONDO"], ["05", "NACIONALES"],
  ["06", "RESIDUOS"], ["07", "TELEVISION"], ["Cel1", "CEL01"], ["Cel2", "CEL02"],
  ["08", "NAC2"], ["08b", "MYT"], ["09", "EXPEDISION"], ["09b", "CALIDAD"],
  ["10", "MAT PRIMA"], ["11", "DEP RVF"], ["12", "AIRE 1"], ["13", "DARSENAS"],
  ["14", "AIRE 2"], ["15", "SALA BOMBAS"], ["16", "FCT"], ["17", "LABORATORIO"],
  ["18", "DEP NUEVO"], ["19", "NVR SALA"], ["20", "IA FONDO"], ["TV1", "TV 1"],
  ["TV2", "TV 2"], ["TV3", "TV 3"], ["TV4", "TV 4"]
];

const SECTORES = ["GUARDIA","ADMIN","MEDICO","IA","FCT","OFDEPOSITO","MANTENIMIENTO","COMEDOR","AIRE","SOLDADURA","CAÑOS","CELULARES","TV","MYT","PRODUCCIÓN","IT","SUM","NACIONALES","LABORATORIO","CALIDAD","INGENIERIA"];
const GROUPS = ["AP","SW","CAM","RFID","SERVIDORES","IMPRESORAS","PC","OTROS"];
let devices = [
  { ip:"10.3.11.120", hostname:"EQUIPO-PRUEBA", location:"IT", group:"PC", status:"online", rack:"16", sector:"FCT", patch:"", sw:"", boca:"", marca:"", descripcion:"Equipo de prueba", connection:"RED" }
];
let rackData = Object.fromEntries(RACKS.map(([rack, sector]) => [rack, [{rack,sector,patch:"",sw:"",boca:"",marca:"",descripcion:"",hostname:"",ip:""}]]));
