class Round < ApplicationRecord
  belongs_to :deck
  belongs_to :user
  has_many :guesses
  # Remember to create a migration!
end
