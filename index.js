// const superbowlWin = (arr) => arr.find(obj => obj.result === 'W').year

function superbowlWin(record) {
    const answer = record.find(obj => obj.result === 'W');
    if (answer !== undefined) {
        return answer['year']
    } else {
        return undefined;
    }
}
