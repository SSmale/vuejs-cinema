function checkFilter(catagory, name, state) {
    if (state) {
        this[catagory].push(name)
    } else {
        let index = this[catagory].indexOf(name)
        if (index > -1) {
            this[catagory].splice(index, 1)
        }
    }
}

function setDay(day) {
    this.day = day
}

export {
    checkFilter,
    setDay
}