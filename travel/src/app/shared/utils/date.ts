import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

export function dateToString(d:Date|NgbDate){
    let mtString:string="";
    let dayString="";
    if(d instanceof Date){
        const mt = (d.getMonth() + 1);
        const day =  d.getDate();
        mtString = ""+mt;
        dayString=""+day;
        if(mt<10){
            mtString = "0"+mt;
        }
        if(day<10){
            dayString="0"+day;
        }
        console.log(mtString);
        return  d.getFullYear() + "-" + mtString + "-" +dayString;
    }else if(d instanceof NgbDate){
        mtString = ""+d.month;
        dayString=""+d.day; 
        if(d.month<10){
            mtString = "0"+d.month;
        }
        if(d.day<10){
            dayString="0"+d.day;
        }
        return d.year+"-"+mtString+"-"+dayString;
    }
    return "";
}