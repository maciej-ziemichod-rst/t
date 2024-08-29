const cookieInventory = {
	chocolate: 1,
	sugar: 20,
	gingerBread: 10,
	peanutButter: 30,
	snickeDoodle: 73,
};

function takeCookie(cookie, count) {
    if (count <= 0) {
        return 0;
    }

    let cookiesTaken = count;
    if (cookieInventory[cookie] < count) {
        cookiesTaken = cookieInventory[cookie];
    }

    cookieInventory[cookie] -= cookiesTaken;

    return cookiesTaken;
}
