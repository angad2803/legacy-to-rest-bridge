#include <iostream>
#include <cstdlib>

class WeatherStation
{
public:
  WeatherStation()
  {
    srand(time(nullptr));
  }

  double getTemperature()
  {
    return 20 + (rand() % 1000) / 100.0 - 5;
  }

  double getHumidity()
  {
    return 50 + (rand() % 2000) / 100.0 - 10; // 50 ±10%
  }

  double getWindSpeed()
  {
    return 10 + (rand() % 600) / 100.0 - 3; // 10 ±3 km/h
  }
};

// Optional: main to test
int main()
{
  WeatherStation ws;
  std::cout << "Temperature: " << ws.getTemperature() << std::endl;
  std::cout << "Humidity: " << ws.getHumidity() << std::endl;
  std::cout << "Wind Speed: " << ws.getWindSpeed() << std::endl;
}
