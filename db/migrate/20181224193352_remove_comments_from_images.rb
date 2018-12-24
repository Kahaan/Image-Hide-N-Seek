class RemoveCommentsFromImages < ActiveRecord::Migration[5.2]
  def change
    remove_column :images, :comments, :integer
  end
end
