class Challenge < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true

  scope :active, -> { where('start_date <= ? AND end_date >= ?', Time.zone.now, Time.zone.now) }
  scope :inactive, -> { where('end_date < ?', Time.zone.now) }
  scope :upcoming, -> { where('start_date > ?', Time.zone.now) }
end
