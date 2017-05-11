namespace Rocoland.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class productchange : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Products", "ProducerId", "dbo.Producers");
            DropIndex("dbo.Products", new[] { "ProducerId" });
        }
        
        public override void Down()
        {
            CreateIndex("dbo.Products", "ProducerId");
            AddForeignKey("dbo.Products", "ProducerId", "dbo.Producers", "Id", cascadeDelete: true);
        }
    }
}
