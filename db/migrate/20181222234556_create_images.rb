class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.integer :Created_by
      t.string :Caption
      t.integer :Comments

      t.timestamps
    end
  end
end
