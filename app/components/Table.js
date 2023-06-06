export function Table(props){
    const $section = document.createElement("section");
    $section.classList.add("table");
    const $table = document.createElement("table");
    $section.appendChild($table);
    
    return $section;

}