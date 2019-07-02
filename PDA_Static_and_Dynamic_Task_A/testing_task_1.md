### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

checkforAce should read check_for_ace (snake case)
should be def, not dif
comma needed between card 1 and card 2 in arguments
card.value = 1  should read card.value == 1
card.name does not exist. name is not a property of card
too many "ends"
card is not declared should be card1
self is not required
total not assigned a value should read total = 0
return "You have total of" should come after the first end
incorrect needs syntax for interpolation


### Testing task 2 code:


# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end

def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end


```
