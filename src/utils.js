// utils
export function callTimedelta(date) {
	// in seconds
	return parseInt((new Date() - new Date(date))/1000)
}

export function formatTimedelta(td) {
	let s;
	switch(true) {
		case (td < 60):
    	s=strFormat("%s secs ago", td);
    	break;
		case (td < 3600):
    	s=strFormat("%s mins ago", parseInt(td/60));
    	break;
    case (td < 3600 * 24):
    	s=strFormat("%s hrs ago", parseInt(td/3600));
    	break;
	  default:
	    s=strFormat("%s days ago", parseInt(td/(24*3600)));
	    break;
	}
	return s
}

export function strFormat(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}

export function arr1_minus_arr2(arr1, arr2) {
	let result;
	if (Array.isArray(arr1) && Array.isArray(arr2)) {
		result = arr1.filter(word => arr2.indexOf(word) == -1)
	}
	return result;
}

export function getLastMessage(arr) {
	let last = arr[0];
	for (let el of arr) {
		if (last && last.timestamp >= el.timestamp) {
			last = el;
		}
	}
	return last;
}

export function groupMessages(messages) {
  var grouppedMessages = [];
  for (let m of messages) {
    let index = m.subject;
    if (!grouppedMessages[index]) {
      grouppedMessages[index] = [];
    }
    grouppedMessages[index].push(m);
  }
  return grouppedMessages
}

export function fillSubjects(messages) {
	let subjects = []
	for (let m of messages) {
		if (subjects.indexOf(m.subject) == -1) {
			subjects.push(m.subject)
		}
	}
	return subjects
}
