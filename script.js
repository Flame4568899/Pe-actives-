
// Object to store the votes
let votes = {
    soccer: 0,
    basketball: 0,
    dodgeball: 0,
    yoga: 0,
};

// Function to handle voting
function vote(activity) {
    // Increment the vote count based on the activity selected
    votes[activity.toLowerCase()] += 1;
    updateResults();
}

// Function to update the results in the DOM
function updateResults() {
    document.getElementById('soccer-votes').textContent = votes.soccer;
    document.getElementById('basketball-votes').textContent = votes.basketball;
    document.getElementById('dodgeball-votes').textContent = votes.dodgeball;
    document.getElementById('yoga-votes').textContent = votes.yoga;
}
