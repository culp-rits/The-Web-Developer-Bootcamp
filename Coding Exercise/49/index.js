function validUserNames(usernames) {
    const validUserNames = usernames.filter(u => u.length < 10);
    console.log(validUserNames);
    return validUserNames;
}
