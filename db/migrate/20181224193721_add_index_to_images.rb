class AddIndexToImages < ActiveRecord::Migration[5.2]
  def change
    add_index :images, :user_id
  end
end
