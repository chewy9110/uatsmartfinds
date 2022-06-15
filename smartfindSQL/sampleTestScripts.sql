select * from product join user on product.ownerid=user.userid;

select * from product;

select * from watchlist;

select * from watchlist
join user on watchlist.userid=user.userid
join product on watchlist.productid=product.productid;