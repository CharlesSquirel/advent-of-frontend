interface IGift {
  [id: number]: {
    gift: string[];
  };
}

export class GiftRegistry {
  static gifts: IGift[] = [];

  addGift(id: number, gift: string) {
    const existingGift = GiftRegistry.gifts.find((entry) =>
      entry.hasOwnProperty(id)
    );
    if (!existingGift) {
      GiftRegistry.gifts.push({
        [id]: {
          gift: [gift],
        },
      });
    } else {
      existingGift[id].gift.push(gift);
    }
  }

  getGiftsForChild(id: number) {
    const existingGift = GiftRegistry.gifts.find((entry) =>
      entry.hasOwnProperty(id)
    );
    if (!existingGift) {
      return "Gift not found";
    } else {
      return existingGift[id].gift;
    }
  }

  removeGift(id: number, gift: string) {
    const existingId = GiftRegistry.gifts.find((entry) =>
      entry.hasOwnProperty(id)
    );
    if (!existingId) {
      throw new Error("Gift not found");
    } else {
      const existingGift = existingId[id].gift.includes(gift);
      if (!existingGift) {
        throw new Error("Gift not found");
      } else {
        existingId[id].gift = existingId[id].gift.filter(
          (string) => string !== gift
        );
      }
    }
  }
}
