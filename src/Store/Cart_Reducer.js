import update from "react-addons-update";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let tempState = { ...state };
      const item = action.payload;

      if (tempState.items[item.id]) {
        tempState = update(tempState, {
          items: {
            [item.id]: {
              quantity: { $set: tempState.items[item.id].quantity + 1 },
            },
          },
        });
      } else {
        // tempState = update(tempState, {
        //   items: {
        //     [item.id]: {
        //       $set: {
        //         id: item.id,
        //         name: item.name,
        //         price: item.price,
        //         quantity: 1,
        //       },
        //     },
        //   },
        // });

        tempState = update(tempState, {
          items: {
            $merge: {
              [item.id]: {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: 1,
              },
            },
          },
        });
      }
      tempState.totalItems += 1;
      tempState.cartPrice += item.price;

      return tempState;
    }

    case "REMOVE_FROM_CART": {
      let tempState = { ...state };
      let item = action.payload;

      tempState = update(tempState, {
        items: {
          [item.id]: {
            quantity: { $set: tempState.items[item.id].quantity - 1 },
          },
        },
      });

      if (tempState.items[item.id].quantity === 0)
        delete tempState.items[item.id];

      tempState.totalItems -= 1;
      tempState.cartPrice -= item.price;
      return tempState;
    }

    case "CLEAR_CART": {
      return {
        items: {},
        totalItems: 0,
        cartPrice: 0,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
