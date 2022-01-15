export class SeasonalIngredientRepository {
    /**
     * Returns a list of ingredients which are seasonal during the given month
     * @param month
     * @returns {string[]}
     */
    getIngredientsByMonth(month) {
        // TODO use month parameter
        switch (month) {
            case "january":
                return (["mushroom","kale","potato","leek","parsnip"])
                break;

            case "february":
                return(["mushroom","kale","potato","leek","parsnip"])
                break;

            case "march":
                return(["mushroom","kale","potato","leek","parsnip","spinach"])
                break;

            case "april":
                return(["mushroom","kale","potato","leek","parsnip","spinach","asparagus"])
                break;

            case "may":
                return(["mushroom","kale","potato","leek","parsnip","spinach","asparagus"])
                break;

            case "june":
                return(["mushroom","kale","potato","leek","parsnip","asparagus","beans","broccoli","peas","carrot"])
                break;

            case "july":
                return(["mushroom","kale","potato","leek","parsnip","asparagus","beans","broccoli","peas","carrot",
                    "pumpkin","corn","carrot","paprika","tomato","zucchini","onions"])
                break;

            case "august":
                return(["mushroom","kale","potato","leek","parsnip","asparagus","beans","broccoli","peas","carrot",
                    "pumpkin","corn","carrot","paprika","tomato","zucchini","onions"
                ])
                break;

                case "september":
                return(["mushroom","kale","potato","leek","parsnip","asparagus","beans","broccoli","peas","carrot",
                    "pumpkin","corn","carrot","paprika","tomato","zucchini","onions"
                ])
                break;

            case "october":
                return(["mushroom","kale","potato","leek","parsnip","asparagus","beans","broccoli","peas","carrot",
                    "pumpkin","corn","carrot","paprika","tomato","zucchini","onions"
                ])
                break;

            case "november":
                return(["mushroom","kale","potato","leek","parsnip","spinach"])
                break;

            case "december":
                return(["mushroom","kale","potato","leek","parsnip","spinach"])
                break;
        }

    }
}