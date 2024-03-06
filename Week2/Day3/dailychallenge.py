items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}
wallet = "$300"

clean_wallet = int(wallet.strip('$'))

# check the price
#compare/check if i have enough money for it
# put the items in the basket
# subtract the price from my wallet

clean_item_purchase = {}

for item, price in items_purchase.items()
#price.replace ('$' , '')
clean_price = price.strip('$')
clean_price = clean_price.replace(',', '')
float(clean_price)
clean_item_purchase.update({item : clean_price})

basket
