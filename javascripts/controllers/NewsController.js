app.controller("NewsController", ['$scope', function ($scope)
{
	var newslist = [
        {
            time: "2015-10-09",
            text: "Non so cosa scrivere aaaaaaaaaah"
        },
	];
	
	$scope.events = [
		{
            time: "2015-10-09",
            text: "Nulla in programma.",
            link: "#"
		}
	]
	
	$scope.list = [];
	for(var i=0; i < newslist.length; i++)
	{
		$scope.list[i] = newslist[newslist.length - 1 - i];
	};
}]);
