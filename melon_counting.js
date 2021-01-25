// Our customers are going to buy lots of melons!

melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba']

function countMelons(melonList) {
    // Take in a list and return an object of # of melons by melon type.

    let melonCount = {};

    // JS USES OF NOT IN, SECOND TIME I MESSED THIS UP!
    for (const melon of melonList) {
        if (melonCount.hasOwnProperty(melon)) {
            melonCount[melon] += 1;
        } 
        else {
            melonCount[melon] = 1;
        };

    }

    return melonCount
}