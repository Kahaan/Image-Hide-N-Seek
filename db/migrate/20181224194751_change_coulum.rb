class ChangeCoulum < ActiveRecord::Migration[5.2]
  def change
    change_column :images, :user_id, :integer, null: false
  end
end
