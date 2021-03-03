const x1 = (x, y) => {
    return x === y ? 3 * (x + y) : x + y
};

const x2 = num => {
    let abs1 = Math.abs(19 - num);
    return num < 19 ? abs1 : 3 * abs1;

};

const x3 = (str, num) => {
    return str.split('').filter(l => str[num - 1] != l).join('');
};

const x4 = str => {
    return /^Java/.test(str);
};

const x5 = str => {
    if (str.length < 9) return str;
    if (str.substring(4, 10) === 'Script') {
        return str.substring(0, 4) + str.substring(10, str.length)
    } else {
        return str;
    }
}

const x6 = (...int) => {
    return int.sort((a, b) => b - a)[0];
}

const x7 = (x1, x2) => {
    let abs1 = Math.abs(100 - x1)
    let abs2 = Math.abs(100 - x2)
    return abs1 > abs2 ? abs2 : abs1;
}

const x8 = (x1, x2) => {
    if (x1 >= 70 && x1 <= 100 && x2 >= 70 && x2 <= 100) {
        return 'In range: 70..100';
    } else if (x1 >= 40 && x1 <= 60 && x2 >= 40 && x2 <= 60) {
        return 'In range: 40..60';
    } else return 'Neither';

}

const x9 = (str, ch) => {
    return str.substring(1, 4).includes(ch)
}

const x10 = (x, y, z) => {
    if ((x > 0) && y > 0 && z > 0) {
        return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
    } else
        return false;
}

const x11 = (x1, x2) => {
    return x1 + x2 >= 50 && x1 + x2 <= 80 ? 65 : 80
}

const x12 = (x1, x2) => {
    return x1 == 15 || x2 == 15 || x1 + x2 == 15 || Math.abs(x1 - x2) == 15
}

const x13 = str => {
    let ker = new Array
    str.split('').forEach(le => ker.push(String.fromCharCode(le.charCodeAt(0) + 1)))
    return ker;
}

const x14 = str => {
    return str.split('').sort().join('')
}

const x15 = num => {
    let time = num / 60;
    time = time.toString().split('.');
    let min = 60 * Number('0.' + time[1]);
    return `${time[0]}:${min.toFixed(0)}`
}

const x16 = str => {
    console.log(typeof String.call(str));
}

const x17 = num => {
    return !num ? 1 : num * x17(num - 1)
}

const x18 = (a, b) => {
    return !b ? a : x18(b, a % b)
}

const x19 = (arr) => {
    return arr.reduce((acc, val) => acc + val);
}


