import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "humanTime"})
export class Timer implements PipeTransform {

  transform(value: any): any {
    if (value) {

		// Unix time conversion
        value = value * 1000
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);

		// less than 30 seconds ago will show as 'Just now'
        if (seconds < 29) {
			return "Just now";
		}
            
        const intervals = {
            "year": 31536000,
            "month": 2592000,
            "week": 604800,
            "day": 86400,
            "hour": 3600,
            "minute": 60,
            "second": 1
        };

        let counter;
		
        for (const i of Object.keys(intervals)) {
            counter = Math.floor(seconds / intervals[i]);
            if (counter > 0)
                if (counter === 1) {
                    return counter + " " + i + " ago"; // singular (1 day ago)
                } else {
                    return counter + " " + i + "s ago"; // plural (2 days ago)
                }
        	}
    	}
    	return value;
	}
}
