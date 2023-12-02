interface IGift {}

export class GiftRegistry {
  static gifts: string[] = [];
  addGift(gift) {
    GiftRegistry.gifts.push(gift);
  }
}
