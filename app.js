function add(a, b) {
    return a * b; // Changing addition to multiplication creates a bug!
}
module.exports = add;