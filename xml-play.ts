import { StarSystem } from "./StarSystem";

console.clear();

var clusterXml = `<?xml version="1.0"?>
<cluster xmlns="http://www.how-hard-can-it-be.com/diaspora/cluster"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://www.how-hard-can-it-be.com/diaspora/cluster/cluster.xsd">
  <starSystem id="Alpha" technology="-1" environment="4" resources="-1"/>
  <starSystem id="Bravo" technology="2" environment="1" resources="1"/>
  <starSystem id="Charlie" technology="-1" environment="1" resources="-2"/>
  <starSystem id="Delta" technology="1" environment="1" resources="1"/>
  <starSystem id="Echo" technology="0" environment="-3" resources="1"/>
  <starSystem id="Foxtrot" technology="0" environment="-1" resources="3"/>
</cluster>`

console.log(clusterXml);

export var starSystems = new Array<StarSystem>();

if ((<any>window).DOMParser)
{
   let parser : DOMParser = new (<any> window).DOMParser();
   let clusterDom : Document = parser.parseFromString( clusterXml, "text/xml");
   let clusterElt = clusterDom.documentElement;
   let starSysNodes = clusterElt.childNodes;
   for (let i = 0; i < starSysNodes.length; i++)
   {
      if (starSysNodes[i].nodeType == Node.ELEMENT_NODE
          && starSysNodes[i].nodeName == "starSystem")
      {
         let starSysElt: Element = starSysNodes[i] as Element;
         starSystems.push( new StarSystem(
            starSysElt.getAttribute( "id"),
            Number( starSysElt.getAttribute( "technology")),
            Number( starSysElt.getAttribute( "environment")),
            Number( starSysElt.getAttribute( "resources"))
         ));
      }
   }
   for (let s of starSystems)
      console.log( s.toString());
}

// ----------------------------------------------  appendClusterToTable  -----------------------------------------------

export function appendClusterToTable( /* starSystems: Array<StarSystem> */): void
{
   console.log( "appendClusterToTable()");

   let doc = window.document;
   let tbl = doc.getElementById( "cluster-table");
   let tbody = tbl.getElementsByTagName( "tbody")[0];
   for (let s of starSystems)
   {
      console.log( s.id);
      let row = tbody.appendChild( doc.createElement("TR"));
      let cell = row.appendChild( doc.createElement("TD"));
      cell.textContent = s.id;
      cell = row.appendChild( doc.createElement("TD"));
      cell.textContent = `T${s.technology} E${s.environment} R${s.resources}`;
   }
}
