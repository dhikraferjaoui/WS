function get_url(request) {
  /*
   * request: the sparql request
   * return a string (url)
   */
  request = String(request);
  let url = "https://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=";
  let end = "&format=application%2Fhtml&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on&run=+Run+Query+"
  return (url+encodeURI(request)+end);
}
