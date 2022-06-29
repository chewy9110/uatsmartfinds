(SELECT productid
FROM watchlist
GROUP BY productid)
;

SELECT * FROM product p 
left join (SELECT productid, count(*) as watchcount, w.userid as wuser FROM watchlist w GROUP BY productid) j on p.productid=j.productid 
left join (select userid, displayName from user) u on p.ownerid=u.userid
where p.ownerid=2 and p.deleteStatus=false order by p.dateUpdated;

